import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

// Builds a JWT client from the service account credentials stored in
// Render's environment variables. A service account key does not expire
// the way the Gmail OAuth tokens do, so this should never need to be
// touched again once it's set up.
function getAuthClient() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  // Render env vars store newlines as literal "\n" -- convert them back
  // to real newlines or the private key won't parse.
  const privateKey = (process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY || '').replace(/\\n/g, '\n');

  if (!email || !privateKey) {
    throw new Error(
      'Google service account credentials are missing. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY in Render.'
    );
  }

  return new google.auth.JWT(email, null, privateKey, SCOPES);
}

// campType should be exactly "Girls" or "Boys" -- this determines which
// sheet ID env var is used. To point at a new year's sheet, just update
// GIRLS_SHEET_ID / BOYS_SHEET_ID in Render's environment variables; no
// code changes needed.
function getSheetId(campType) {
  const sheetId =
    campType === 'Girls'
      ? process.env.GIRLS_SHEET_ID
      : process.env.BOYS_SHEET_ID;

  if (!sheetId) {
    throw new Error(
      `No sheet ID configured for camp type "${campType}". Set GIRLS_SHEET_ID / BOYS_SHEET_ID in Render.`
    );
  }

  return sheetId;
}

// Appends a single row of values to the bottom of the appropriate sheet.
// `row` should be an array of plain values in column order.
export async function appendRegistrationRow(campType, row) {
  const auth = getAuthClient();
  const sheets = google.sheets({ version: 'v4', auth });
  const spreadsheetId = getSheetId(campType);

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A1',
    valueInputOption: 'USER_ENTERED',
    insertDataOption: 'INSERT_ROWS',
    requestBody: {
      values: [row],
    },
  });
}

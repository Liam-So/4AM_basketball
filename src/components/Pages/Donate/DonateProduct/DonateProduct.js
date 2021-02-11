import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

function DonateProduct({ product, onAddToCart }) {

    const classes = useStyles() ; 

    console.log(product);

    return (
        <Card className={classes.root}>
            <CardMedia >
                <img src={product.media.source} alt={product.alt}/>    
            </CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" style={{fontFamily: 'Lato'}} gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" style={{fontFamily: 'Lato'}} color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}><AddShoppingCart /></IconButton>
            </CardActions>
        </Card>
    )
}

export default DonateProduct

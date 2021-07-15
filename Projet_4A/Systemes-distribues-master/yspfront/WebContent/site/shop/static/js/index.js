const domain    = "http://localhost:80/YouShopPretty";
const products  = "products";
const route     = "yspfront/site"; 
const shop      = "shop";

$(document).ready(function(){

    /* GET All Product */
    $.ajax({
        url: `${domain}/${products}`,
        type: 'get',
        success: function(response){
            for(i=0; i < response.length && i<=23; i++){
                let {id,price, name,imageLink,quantity} = response[i];
                $('#article-list .container .row').append(`
                <div class="col-lg-2 col-md-3 col-sm-4 col-xs-12" id="product">
                    <div class="card">
                        <img src=${imageLink} class="img-fluid zoom" alt="item">
                    </div>
                    <div class="middle" id=${id}>
                        <a id="link-to-viewArticle" href="/${route}/${shop}/view-article.html?id=${id}" class="btn btn-prinmary"><i class="fas fa-eye"></i></a>
                        <a type="button" class="btn btn-prinmary" onclick="addOnWishList(${id},'${name}')"><i class="far fa-heart"></i></a>
                        <a type="button" class="btn btn-prinmary" onclick="addToCart(${id},${price},'${name}','${imageLink}',${quantity})" ><i class="fas fa-cart-plus"></i></a>
                    </div>
                    <script type="text/javascript">
                        console.log(${imageLink})
                    </script>
                    <div class="title-article">
                    <strong class="name-article">${name}</strong> 
                    <span id="price">${price}€</span>
                    </div>
                    <ul>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="fas fa-star"></i></li>
                        <li><i class="far fa-star"></i></li>
                    </ul>
                </div>`)
            }
        },
        error: function(){
            console.log("error AJAX GET");
        }
    });


});

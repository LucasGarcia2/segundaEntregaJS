let producto = parseInt(prompt('Escoge el producto que deseas comprar: 1.Neumaticos - 2.Aceites - 3.Cascos'))
let seguirComprando = true
let totalCompra = 0
let decision
// arreglo de productos
const productosArray = []
// clase producto
class NewProduct{
  constructor(id,name,price,stock){
    this.id = id
    this.name = name;
    this.price = price;
    this.stock = stock
  }
}
const pirelli = new NewProduct(4,'Pirelli',200,20);
productosArray.push(pirelli);
const michelin = new NewProduct(5,'Michelin',150,40);
productosArray.push(michelin);
const motul = new NewProduct(6,'Motul',50,30);
productosArray.push(motul);
const castrol = new NewProduct(7,'Castrol',80,15);
productosArray.push(castrol);
const shark = new NewProduct(8,'Shark',350,10);
productosArray.push(shark);
const hawk = new NewProduct(9,'Hawk',70,30);
productosArray.push(hawk);

console.log(productosArray)

while (seguirComprando === true) {
  if (producto === 1){
    neumaticos = parseInt(prompt('Escoge el producto que deseas comprar: 4.Pirelli - 5.Michelin'))
      if (neumaticos === pirelli.id) {
        totalCompra = totalCompra + pirelli.price
        pirelli.stock = pirelli.stock-1
      } else if (neumaticos === michelin.id){
        totalCompra = totalCompra + michelin.price
        michelin.stock = michelin.stock-1
      }     
  } else if (producto === 2){
    aceites = parseInt(prompt('Escoge el producto que deseas comprar: 6.Motul - 7.Castrol'))
    if (aceites === motul.id) {
      totalCompra = totalCompra + motul.price
      motul.stock = motul.stock-1
    } else if (aceites === castrol.id){
      totalCompra = totalCompra + castrol.price
      castrol.stock = castrol.stock-1
    }
  } else if (producto === 3){
    cascos = parseInt(prompt('Escoge el producto que deseas comprar: 8.Shark - 9.Hawk'))
    if (cascos === shark.id) {
      totalCompra = totalCompra + shark.price
      shark.stock = shark.stock-1
    } else if (cascos === hawk.id){
      totalCompra = totalCompra + hawk.price
      hawk.stock = hawk.stock-1
    }
  }

  // console.log(productosArray[producto-1])
  // totalCompra = totalCompra + productosArray[producto-1].price

  decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
  if (decision === 1) {
    producto = parseInt(
      prompt(
        'Escoge el producto que deseas comprar: 1.Neumaticos - 2.Aceites - 3.Cascos'
      )
    )
  } else {
    seguirComprando = false
  }

  }

const totalCompraConDescuento = descuento(totalCompra)
alert(`El total de tu compra es ${totalCompraConDescuento}`)


function descuento(valor) {
  let descuento = 0
  if (valor <= 1000) {
    descuento = 10
  } else if (valor > 1000 && valor <= 2000) {
    descuento = 15
  } else {
    descuento = 20
  }

  let valorDescuento = valor * (descuento / 100)
  let valorFinal = valor - valorDescuento
  return valorFinal
}

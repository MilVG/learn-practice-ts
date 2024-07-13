export type Motoslist = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  precio: number;
  img: string;
}

export type Carrito = Motoslist[];

export type handleToCarrito = (item: Motoslist) => void
export type carritoProps = {
  moto: Motoslist;
  //setCarrito: React.Dispatch<React.SetStateAction<Carrito>>
  handleAddToCarrito: handleToCarrito
}

export type handleshowCarrito = () => void
export type carritoPropsRoot = {
  carrito: Motoslist[];
  setCarrito: React.Dispatch<React.SetStateAction<Motoslist[]>>
}

export type motos = {
  datamotos: Motoslist[];
  handleToCarrito:handleToCarrito
}

export type handleclearCart = () => void
export type handleDeleteItem = (id: number) => void
export type handleIncrementQuantity = (id: number) => void
export type handleDescrementQuantity = (id: number) => void

export type cartProps ={
  carrito: Motoslist[]
  setCarrito: React.Dispatch<React.SetStateAction<Motoslist[]>>
  handleshowCarrito:handleshowCarrito
  isFlex: boolean
  totalCart: number
  handleclearCart:handleclearCart
  handleDeleteItem:handleDeleteItem
  handleIncrementQuantity:handleIncrementQuantity
  handleDescrementQuantity:handleDescrementQuantity
}

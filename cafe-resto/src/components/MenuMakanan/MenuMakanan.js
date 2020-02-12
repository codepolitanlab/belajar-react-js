import React from 'react'

// nama function diawali lowercase
var menuMakanan = (props) => {
    if(props.stock !== 0) {
        return (
            <div style={{border: "1px solid black", width: 300, margin: 'auto'}}>
                <p>Nama Menu: { props.namaMenu }</p>
                <p>Harga: Rp. { props.hargaMenu }</p>
                <p>Stock:  {props.stock}</p>
            </div>
        )
    } else {
        return null
    }
    
}

export default menuMakanan
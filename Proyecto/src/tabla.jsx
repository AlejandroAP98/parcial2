import React from 'react'

export default function tabla() {
  return (
    <div className="container">
        <h1>Tabla</h1>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Edad</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Alejandro</td>
                    <td>Alvarez</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>25</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

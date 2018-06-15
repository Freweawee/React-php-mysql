import React from "react"

export class Table extends React.Component { 

    constructor() {
        super();
        this.state = {
            mensaje: "Chaos"
        };
    }

    buildTable(tabla) {
        var subTable = [];
        var i = 0;

        for(i=0; i<Object.keys(tabla).length;i++){
            subTable.push(<tr>
                            <td>{tabla[i].idClase}</td>
                            <td>{tabla[i].nombreC}</td>
                            <td>{tabla[i].Materia}</td>
                            <td>{tabla[i].Titulo}</td>
                            <td>{tabla[i].Descripcion}</td>
                            <td>{tabla[i].fecha}</td>
                        </tr>);
        }

        this.setState({
            mensaje: subTable
        })
    }

    fetchRows(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                var tabla = JSON.parse(xmlhttp.responseText);
                console.log(tabla);
                this.buildTable(tabla);
                
            }else{
                console.log(xmlhttp.status);
                console.log(xmlhttp.readyState);
            }
        }.bind(this);
        xmlhttp.open("POST","../server/obtenerdatos.php",true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send();
    }

    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td>idClase</td>
                        <td>nombreC</td>
                        <td>Materia</td>
                        <td>Titulo</td>
                        <td>Descripcion</td>
                        <td>fecha</td>
                    </tr>
                    {this.state.mensaje}
                </table>
                <button className="btn" onClick={()=>this.fetchRows()}>Cambiar</button>
            </div>
        );
    }

    
}
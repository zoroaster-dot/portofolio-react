import React from 'react'

class Kontak extends React.Component{
    render(){
        return(
            <div className="jumbotron" >    
                <div className="container-fluid">
                <div class="p-3 mb-2 bg-dark text-center text-white lead ">Kontak</div>
                    <div class="card shadowss" style={{ width: "650px" }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="WA.jpeg" class="card-img" alt="#"></img>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h1 class="card-title">WhatsApp</h1>
                                    <p class="card-text">Nomor WhatsApp saya 0823xxxxxxxx</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div class="card shadowss" style={{ width: "650px" }}>
                        <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="IG.jpeg" class="card-img" alt="#"></img>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h1 class="card-title">Instagram</h1>
                                    <p class="card-text">Follow Instagram saya @mariregal__</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
            </div>
        )
    }
}

export default Kontak;
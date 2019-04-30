let observer = {
    obtenerOfertas:function(callback){
        if(typeof callback == "function"){
            this.suscribers[this.suscribers.length] = callback;
        }
    }
}
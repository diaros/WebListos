function cambiarMapa(id) {

    if (id === 'cali') {
        var src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995.6333283596059!2d-76.53195730000003!3d3.4629175999999955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a66cb0931561%3A0x6d8e06935e05b780!2sCl.+21+Nte.+%238+Norte-8%2C+Cali%2C+Valle+del+Cauca!5e0!3m2!1ses-419!2sco!4v1436478785686";
    }

    if (id === 'bogota') {
        var src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.471390560379!2d-74.05913869999999!3d4.6878413000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ac1896fec8f%3A0x7810a9c83e517be8!2sCra.+47+%23100-41%2C+Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1436478060673";
    }

    if (id === 'buenaventura') {

        var src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.6474323905695!2d-77.07455070000006!3d3.8855274999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e372475c4964231%3A0x54118aa1da4600af!2sCl.+3+%237-9%2C+Buenaventura%2C+Valle+del+Cauca!5e0!3m2!1ses-419!2sco!4v1436479594650';

    }

    if (id === 'medellin') {
        var src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0529471913105!2d-75.5961093!3d6.256755699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290d1f369985%3A0x1fbdc8cf05726292!2sCra.+78+%2347-33%2C+Medell%C3%ADn%2C+Antioquia!5e0!3m2!1ses-419!2sco!4v1436479887280';
    }
    
    if(id === 'barranquilla'){
        var src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.671913053102!2d-74.79494790000001!3d10.988118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d6fd276ca95%3A0xead62623e2f7e8da!2sCl.+58+%2344-120%2C+Barranquilla%2C+Atl%C3%A1ntico!5e0!3m2!1ses-419!2sco!4v1436480470093';       
    }
    
    if(id === 'bucaramanga'){
        var src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.151432496272!2d-73.11013609999999!3d7.1084431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683fe83a194f0d%3A0x975442d6e36d4d48!2sCl.+59+%2332-79%2C+Bucaramanga%2C+Santander!5e0!3m2!1ses-419!2sco!4v1436480695282';
     }

    $("#mapaSede").attr("src", src);

}



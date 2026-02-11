require('dotenv').config(); //Esto cargará variables del .env
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Asi se verifica que las llaven sean correctas antes de que se conecte la bd

if (!supabaseUrl || !supabaseKey) {
    console.error('ERROR: Faltan las variables de entorno SUPABASE_URL o SUPABASE_KEY en el archivo .env');
    process.exit(1); // Se detendrá el servidor si no hay llaves
}

// creacion de la conexion con supabase
const supabase = createClient(supabaseUrl, supabaseKey);

console.log(' CONEXION CON SUPABASE EXITOSA ');

module.exports = supabase;
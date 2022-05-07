import { google } from 'googleapis'
import Cabecalho from "../../components/Cabecalho"
import ItemDetalhes from "../../components/ItemDetalhes"

export default function ArmaItem({id, name, category, weight, price}){

    const data = {id, name, category, weight, price}

    return (
        <div className="container">
            <main className="main">
                <Cabecalho/>
                {/* <ItemDetalhes/> */}
            </main>

            <footer className="footer">
            <a href='https://github.com/yuuta-togashi'>
            Criado por: @lucaslrodri
            </a>
            </footer>   
        </div>
    )
}

export async function lerGoogleSheets({query}){

    // Autenticar
    const auth = await google.auth.getClient(
        {
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
            
        }
    )

    const sheets = google.sheets({version:"v4", auth})

    //Query - busca

    // Define a variável de busca
    const { id } = query; //Variavel de busca

    //De acordo com a variável de busca seleciona define as células que serão utilizadas
    const range = `Sheet1!A${id}:E${id}` //Notação de range do Google Sheets

    //Buscando (Usando método GET)...
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SHEET_ID,
        range,
      });

      
    //Resposta da busca
    const [name, category, weight, price]  = response.data.values[0]


        
    return {
        props: {
            id,
            name,
            category,
            weight,
            price
        }
    }
}
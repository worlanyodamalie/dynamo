import type {NextApiRequest,NextApiResponse} from 'next'
import {google} from "googleapis"

// type Contact = {
//     name: string,
//     email: string,
//     phone: string,
//     message: string
// }

export default async function createContact(req: NextApiRequest,res: NextApiResponse){
   
    // if(req.method !== 'POST'){
    //     return res.status(405).send({message: 'Only POST requests allowed'})
    // }
    if(req.method !== 'GET'){
      return res.status(405).send({message: 'Only GET requests allowed'})
  }


    // const contact = req.body as Contact
    const contact = req.query

    const data  = contact.range === 'Contacts!A2:D' 
                         ? [contact.name,contact.email,contact.phone,contact.message] 
                         : contact.range === 'Individual!A2:D' 
                         ? [contact.name,contact.email,contact.phone,contact.message] 
                         : contact.range === 'Company!A2:D' 
                         ? [contact?.name , contact?.phone]       
                         : contact.range === 'Organisation!A2:D'
                         ? [contact.name,contact.email,contact.phone,contact.service,contact.message] 
                         : [contact.name,contact.email,contact.phone,contact.message]

    try {

        const jwt = new google.auth.GoogleAuth(
          {  credentials: {
                client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY!.replace(/\\n/g, "\n"),

            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        }
          );
          const sheets = google.sheets({ version: "v4", auth: jwt });

          const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: contact?.range as string,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
              values: [data],
            },
          });

        //   console.log("response",response)
          return res.status(201).json({
             data: response.data,
             status: response.status
          })

    } catch (e:any) {
        // console.log("error",e)
        return res.status(e.code).send({message: e.message})
    }
}
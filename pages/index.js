import Head from 'next/head'
import fsPromises from 'fs/promises';
import path from 'path'
export default function Home(props) {
  const records = props.records;
  return (
    
    <div style={{ padding: 30 }}>
    
    <div>
        {records.map(post =>
          <div
            key={post.id}
            style={{ padding: 20, borderBottom: '1px solid #ccc' }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.type}</p>
            <p>{post.version}</p>
            <p>{post.section}</p>
          </div>)}

      </div>
      </div>
    
  )
}


  
export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'db.json');
  const jsonData = await fsPromises.readFile(filePath);
  fsPromises.readFile('db.json', (err, data) =>{
    if(err) throw err
    let document = JSON.parse(data)
    console.log(document)
  })
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData
  }
}
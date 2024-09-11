import dados from '../dados.json'
import { Box, Text, Image } from '@skynexui/components'
import Link from 'next/link'

export default function Page() {

  const infos = {
    nome: 'Marcelo Garcia',
    gitHubUser: 'mglipe'
  }

  const posts = dados.posts

  return(
  <Box 
    styleSheet={{
      flexDirection: 'column',
      margin: '32px auto',
      maxWidth: '800px',
      paddingHorizontal: '16px',
    }}
  >

    <Image
      src={`https://github.com/${infos.gitHubUser}.png`}
      styleSheet={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        margin: '0 auto',
        border: '2px solid #F9703E'
      }}
    />

    <Text 
      variant='heading1'
      tag='h1'
      styleSheet={{color: '#F9703E', textAlign: 'center'}}
    >
    {infos.nome}
    </Text>


    <Box
      styleSheet={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', marginTop:'16px', gridGap: '16px'}}
    >

      {posts.map(({title, content, id})=>(
        <Post key={id} title={title} content={content} id={id}></Post>
      ))}
    </Box>


  </Box>
  ) 
    
}


function Post({title, content, id}){
  return(
    <Box
      styleSheet={{
        flexDirection: 'column',
        border: '1px solid #F9703E',
        padding: '16px',
        boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
        transition: '.3s',
        borderRadius: '4px',
        hover:{
          boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)'
        }
      }}
    >

      <Link href={`posts/${id}`}>
        <Text
          tag='a'
          variant='heading4'
          styleSheet={{display: 'block', color: '#F9703E', marginBottom: '8px'}}
        >
          {title}
        </Text>
      
      </Link>

      <Text 
       
      >
        {content.substring(0, 140)}...
      </Text>



    </Box>
  )
}

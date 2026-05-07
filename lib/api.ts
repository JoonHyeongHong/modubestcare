

//응답받을 JSON 데이터의 기본 형태를 정의합니다.
interface FetchAPIResponse {
  data?: any;
  errors?: any[];
}


export async function fetchAPI(query: string, { variables}: {variables?: any} = {}){
  const res = await fetch(process.env.WORDPRESS_API_URL as string,{
    method : 'POST',
    headers : { 'Content-Type':'application/json'},
    body: JSON.stringify({query,variables}),
    cache:'no-store',
  } 
  );

  const json: FetchAPIResponse = await res.json();

  if(json.errors){
    console.error(json.errors);
    throw new Error('데이터를 가져오는데 실패했습니다.');
  }

  return json.data;
}

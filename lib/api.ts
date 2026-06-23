

//응답받을 JSON 데이터의 기본 형태를 정의합니다.
interface FetchAPIResponse {
  data?: any;
  errors?: any[];
}


export async function fetchAPI(query: string, { variables}: {variables?: any} = {}){
  const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL as string;

  if(!API_URL){
    throw new Error('환경변수 NEXT_PUBLIC_WORDPRESS_API_URL이 설정되지 않았습니다. .env.local 파일을 확인해주세요.');
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({ query, variables }),
    
    /* ⚡ 성능 및 SEO 최적화 핵심 변경 항목
      - cache: 'no-store' 대신 next.revalidate 옵션을 사용하여 ISR을 활성화합니다.
      - 60초(1분) 주기로 백그라운드에서 워드프레스의 데이터 변경 여부를 확인하고 빌드합니다.
    */
    next: { revalidate: 60 },
  });

  const json: FetchAPIResponse = await res.json();

  if (json.errors) {
    console.error('WordPress API Errors:', json.errors);
    throw new Error('워드프레스에서 데이터를 가져오는데 실패했습니다.');
  }

  return json.data;
}

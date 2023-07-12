import Head from 'next/head';
import { useRouter } from 'next/navigation';

export default () => {
  const router = useRouter()
  const goHome = () => {
    router.push('/')
  }
  return (
    <div>
      <Head>
        <title>OOps - MeowlTube</title>
      </Head>
      <div>找不到 哇</div>
      <button onClick={goHome}>回首頁</button>
    </div>
  )
}
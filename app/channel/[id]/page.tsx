import { IParams } from '@/app/types/route'

export const metadata = {
  title: "頻道內容 - MeowlTube",
};

export default ({ params }: IParams) => {
  const id = params['id']
  return (
    <div>
      <div>content</div>
    </div>
  )
}
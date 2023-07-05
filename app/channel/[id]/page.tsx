import { IParams } from '@/app/types/route'

export default ({ params }: IParams) => {
  const id = params['id']
  return (
    <main>
      <div>content</div>
    </main>
  )
}
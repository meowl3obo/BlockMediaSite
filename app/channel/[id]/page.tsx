import { IParams } from '@/app/types/route'

export default ({ params }: IParams) => {
  const id = params['id']
  return (
    <main>
      <div> user id : {id} / bar links</div>
      <div>content</div>
    </main>
  )
}
import { redirect } from 'next/navigation';


export default function Home() {
  redirect('https://www.whatbrain.com')
  return (
    <div>What Brain?</div>
  )
}

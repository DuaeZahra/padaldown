import Link from 'next/link'

const Logo: React.FC = () => {
  return (
    <Link href='/' className='text-2xl sm:text-3xl font-bold whitespace-nowrap'>
      Pedal<span className='text-primary'>Down</span>
    </Link>
  )
}

export default Logo

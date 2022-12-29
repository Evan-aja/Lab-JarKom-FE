import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { Input, Button, Textarea, Footer } from 'react-daisyui'
import { toast } from 'react-toastify'

export default () => {
  const [email, setEmail] = useState('')
  const [pesan, setPesan] = useState('')
  const [isLoading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<EventTarget>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/post/help', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          email: email,
          pesan: pesan
        })
      })

      if (res.status === 200) {
        setEmail('')
        setPesan('')
        toast('Pesan berhasil dikirimkan.', {
          type: 'success'
        })
      } else {
        toast('Pesan gagal dikirimkan.', {
          type: 'error'
        })
      }
    } catch (err) {
      toast('Pesan gagal dikirimkan.', {
        type: 'error'
      })
    }
    setLoading(false)
  }

  return (
    <footer id='footer'>
      <div className="bg-[url('/static/footer.jpg')] bg-cover bg-center">
        <div className='backdrop-blur-sm p-8 lg:p-16 xl:p-40 backdrop-brightness-75'>
          <p className='text-white font-bold text-2xl lg:text-5xl drop-shadow-[5px_5px_10px_rgba(0,0,0,0.25)] mb-6'>MORE INFORMATION</p>
          <p className='text-white text-lg lg:text-xl mb-8'>Hubungi kami via Email untuk mendapatkan informasi lebih lanjut mengenai <br className='hidden lg:block' /> Laboratorium Jaringan Berbasis Informasi.</p>
          <div>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <Input name='email' type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Email Anda' size='md' className='w-60 md:w-96' required />
              </div>
              <div className='mb-4'>
                <Textarea name='pesan' value={pesan} onChange={e => setPesan(e.target.value)} placeholder='Pesan' className='w-60 md:w-96 h-32' required />
              </div>
              <div><Button type='submit' color='primary' className={isLoading ? 'loading' : ''}>Kirim</Button></div>
            </form>
          </div>
        </div>
      </div>
      <Footer className='py-10 px-10 xl:px-44 bg-base bg-gradient-to-b from-[#ffffff20] via-transparent text-neutral-content text-lg'>
        <div>
          <Footer.Title>DIREKTORI</Footer.Title>
          <Link href='/' className='link link-hover'>Home</Link>
          <Link href='/profil' className='link link-hover'>Profil</Link>
          <Link href='/penelitian' className='link link-hover'>Penelitian dan Pengabdian</Link>
          <Link href='/layanan' className='link link-hover'>Layanan</Link>
          <Link href='/kontak' className='link link-hover'>Kontak</Link>
        </div>
        <div>
          <Footer.Title>LAB JARINGAN BERBASIS INFORMASI</Footer.Title>
          <p>Fakultas Ilmu Komputer Gedung F 9.6</p>
          <p>Jl. Veteran No. 8, Malang, 65145, Indonesia</p>
        </div>
      </Footer>
      <div className='bg-base text-center p-8'>
        <p className='text-white'>©{new Date().getFullYear()}. All Rights Reserved. by Lab Jaringan 2022</p>
      </div>
    </footer>
  )
}
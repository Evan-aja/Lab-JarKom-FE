import { FormEvent, useState } from 'react'
import { Button, Input, InputGroup } from 'react-daisyui'
import { toast } from 'react-toastify'
import Jumbotron from '../../components/jumbotron'
import FileUpload from '../../components/file-input'
import Content from '../../components/content'
import { t } from '../../lib/i18n'


export default () => {
  const [email, setEmail] = useState('')
  const [nama, setNama] = useState('')
  const [nim, setNim] = useState('')
  const [noTelp, setNoTelp] = useState('')
  const [keperluan, setKeperluan] = useState('')
  const [file, setFile] = useState(null); // State untuk menyimpan file yang diunggah
  const [isLoading, setLoading] = useState(false)
  

  const handleSubmit = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file); // Tambahkan file ke FormData

      // Tambahkan data lainnya ke FormData
      formData.append('email', email);
      formData.append('nama', nama);
      formData.append('nim', nim);
      formData.append('no_telp', noTelp);
      formData.append('keperluan', keperluan);

      const res = await fetch('/api/presensi', {
        method: 'POST',
        body: formData, // Gunakan FormData sebagai body request
      });

      if (res.status === 200) {
        setEmail('');
        setNama('');
        setNim('');
        setNoTelp('');
        setKeperluan('');
        setFile(null); // Reset file setelah berhasil diunggah
        toast('Pendaftaran telah berhasil', {
          type: 'success',
        });
      } else {
        toast('Pendaftaran gagal disimpan.', {
          type: 'error',
        });
      }
    } catch (err) {
      toast('Pendaftaran gagal disimpan.', {
        type: 'error',
      });
    }
    setLoading(false);
  };

  return (
    <>
      <Jumbotron
        title={t('services:registerpklskripsi.title')}
        subtitle={t('services:registerpklskripsi.subtitle')} />

      <Content>
        <div>
          <h3 className='text-baseDark font-bold text-3xl mb-8'>{t('services:registerpklskripsi.heading')}</h3>
          <form onSubmit={handleSubmit} className='block text-center'>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>{t('form:email')}</span>
              <Input value={email} onChange={e => setEmail(e.target.value)}
                className='w-full' type='email' placeholder='paulin@ub.ac.id' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>{t('form:name')}</span>
              <Input value={nama} onChange={e => setNama(e.target.value)}
                className='w-full' type='text' placeholder='Paulin Suartini' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>{t('form:nim')}</span>
              <Input value={nim} onChange={e => setNim(e.target.value)}
                className='w-full' type='number' placeholder='205150201111099' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>{t('form:phone')}</span>
              <Input value={noTelp} onChange={e => setNoTelp(e.target.value)}
                className='w-full' type='tel' placeholder='081233382712' bordered required />
            </InputGroup>
            <InputGroup size='lg' className='mb-6 shadow max-lg:input-group-vertical'>
              <span className='lg:w-52'>{t('form:purpose')}</span>
              <Input value={keperluan} onChange={e => setKeperluan(e.target.value)}
                className='w-full' type='text' placeholder={t('form:purpose_placeholder')!} bordered required />
            </InputGroup>
            <InputGroup className='mb-10'>
              <span >{t('form:upload_cv')}</span>
              <FileUpload onFileChange={(uploadedFile) => setFile(uploadedFile)} /> {/* Gunakan komponen FileUpload */}
            </InputGroup>
            <Button color='ghost' className={`bg-base w-full lg:w-52 ${isLoading && 'loading'}`}>{t('button_send')}</Button>
          </form>
        </div>

        <div className='container flex items-center justify-center'>
          <ul className='my-12 mx-auto menu menu-vertical lg:menu-horizontal'>
            <li className='hover:rounded-lg'>
              <div className='mr-12'>
                <img className='h-83' src='/static/presensi.png'/>
                <a>Presensi</a>
              </div>
            </li>
            <li className='hover:rounded-lg'>
              <div>
                <img className='h-83' src='/static/peminjaman.png'/>
                <a>Peminjaman dan Pengembalian</a>
              </div>
            </li>
          </ul>
        </div>
      </Content>
    </>
  )
}


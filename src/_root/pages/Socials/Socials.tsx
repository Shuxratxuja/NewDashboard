import { useState } from 'react'
import { Navbar } from '../../../components/Navbar'
import { useGetSocials } from './services/query/useGetSocials'
import SocialCard from './SocialCard';
import { RingLoader } from 'react-spinners';
import SocialForm from './SocialForm';
import { useDleteSocials } from './services/mutation/useDleteSocials';


const Socials = () => {
  
  const {data, isLoading, refetch} = useGetSocials()
  console.log(data);

  const {mutate: deleteSocial, isPending} = useDleteSocials()
  
  const [open, setOpen] = useState(false);
  const [record, setRecord] = useState<{id: number, name: string, link: string} | null>(null);
  
  const handleClose = () => {
    setOpen(false);
    setRecord(null);
  }
  
  const handleEdit = (record: {id: number, name: string, link: string}) => {
    setRecord(record);
    setOpen(true);
  }
  
  const handleDlete = (id: number) => {
    deleteSocial(id, {
      onSuccess: () => {
        refetch();
      },
      onError: (error) => {
        console.error(`Error deleting social: ${error}`);
      }
    });
  }

  return (
    <div>
      <Navbar headTitle='Socials' />
      <div>
        {
          isLoading ? (
            <div className='flex justify-center items-center'><RingLoader/></div>
          ) : (
            <div>
        {
          data?.socials?.map((social : {link:string, name: string, id:number}) => (
            <SocialCard 
            key={social.id}
              name={social.name} 
              link={social.link}
              onDelete={() => handleDlete(social.id)} 
              onEdit={() => handleEdit({id: social.id, name: social.name, link: social.link})} 
            />
          ))
        }
      </div>
          )
        }
      </div>
      <SocialForm open={open} refetch={refetch} record={record} onClose={handleClose} />      
    </div>
  )
}

export default Socials
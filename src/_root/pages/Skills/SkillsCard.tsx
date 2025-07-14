import { Button, Card, Typography } from 'antd'
import { DeleteIcon, Edit2Icon } from 'lucide-react'

type Props = {
    skill_id?: number
    name: string
    description?: string
    onEdit: () => void
    onDelete: () => void
}

const SkillsCard = ({name, description, onDelete, onEdit}: Props) => {
  return (
    <Card>
        <Typography.Title>
            {name}
        </Typography.Title>
        <Typography.Paragraph>
            {description}
        </Typography.Paragraph>
        <div className='flex items-center gap-2'>
            <Button onClick={onEdit} className='flex gap-3 items-center'>
                Edit
                <Edit2Icon/>
            </Button>
             <Button onClick={onDelete} className='flex gap-3 items-center'>
                Dlete
                <DeleteIcon/>
            </Button>
        </div>
    </Card>
  )
}

export default SkillsCard
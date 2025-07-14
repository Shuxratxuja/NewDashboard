import { Button, Form, Input, Modal } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect } from 'react'
import { useCreateSocials } from './services/mutation/useCreateSocials';
import { toast } from 'react-toastify';
import { useUpdateSocials } from './services/mutation/useUpdateSocials';

interface SocialFormProps {
  open: boolean;
  onClose: () => void;
  record?: {
    id: number;
    name: string;
    link: string;
  } | null;
  refetch: () => void;
}

const SocialForm = ({ open, onClose, refetch, record }: SocialFormProps) => {
  const [form] = useForm();

  const { mutate: create, isPending: isCreating } = useCreateSocials();
  const { mutate: update, isPending: isUpdating } = useUpdateSocials();

  const handleSumbit = (values: { name: string; link: string }) => {
    if (record) {
      update(
        { id: record.id, name: values.name, link: values.link },
        {
          onSuccess: () => {
            toast.success('Social updated successfully');
            refetch();
            onClose();
          },
          onError: (error) => {
            toast.error(`Error updating social: ${error}`);
          },
        }
      );
    } else {
      create(values, {
        onSuccess: () => {
          toast.success('Social created successfully');
          refetch();
          onClose();
        },
        onError: (error) => {
          toast.error(`Error creating social: ${error}`);
        },
      });
    }
  };

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        name: record.name,
        link: record.link,
      });
    } else {
      form.resetFields();
    }
  }, [record, form]);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={record ? 'Edit Social' : 'Create Social'}
    >
      <Form
        onFinish={handleSumbit}
        form={form}
        layout="vertical"
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Link"
          name="link"
          rules={[{ required: true, message: 'Please input your link!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            loading={isCreating || isUpdating}
            type="primary"
            htmlType="submit"
          >
            {record ? 'Edit' : 'Create'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SocialForm;

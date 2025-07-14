import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { Plus } from 'lucide-react';
import { toast } from 'react-toastify';

const ModalComponent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();

  const onFinish = () => {
    toast.success('Submit success!');
  };

  const onFinishFailed = () => {
    toast.error('Submit failed!');
  };


  return (
    <>
      <Button type="primary" onClick={showModal}>
        <Plus />
      </Button>
      <Modal footer={null}
        title=" "
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          layout='vertical' 
          name="basic"
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="password"
            rules={[{ required: true, message: 'Please input your description!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label={null}>
            <Button onClick={handleCancel} type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ModalComponent;
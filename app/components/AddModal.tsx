"use client"

import { addWorld, addRegion } from '@/util/api'
import { Button, Form, Input, Modal, Select } from 'antd'

const regions = ['Arctic', 'Tundra', 'Coast', 'Forest', 'Jungle', 'Plains', 'Desert', 'Swamp', 'Ocean', 'Mountain']
const {Option} = Select

export default function AddModal({open, setOpen, type, worldId}) {

  const [form] = Form.useForm()
  function close() {
    form.resetFields()
    setOpen(false)
  }

  function submitForm(values: any) {
    if (type==='World') {
      addWorld(values.name, values.desc)
    } else {
      addRegion(values.name, values.desc, values.type, worldId)
    }
    console.log('Submitted: ', values)
    close()
  }

  const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
  setOpen(false)
};

  return (
    <Modal
      title={`Add ${type} Modal`}
      open={open}
      onOk={close}
      onCancel={close}
      >

      <Form
        name={`Add ${type} Form`}
        labelCol={{span: 8}}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={submitForm}
        onFinishFailed={onFinishFailed}
        initialValues={{ nme: '', desc: '' }}
        form={form}
      >
        <Form.Item
          label={`${type} Name`}
          name="name"
          rules={[{required: true, message: `Please input a ${type} name`}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label={`${type} Description`}
          name="desc"
          rules={[{required: true, message: `Please input a ${type} description`}]}
        >
          <Input />
        </Form.Item>
        {type === 'Region' &&
          <Form.Item
            label='Type'
            name = 'type'
            rules={[{required: true}]}
          >
            <Select
              placeholder='Select a type to assign to this region'
            >
              {regions.map((region) => {
                return <Option key={region} value={region}>{region}</Option>
              })}
            </Select>

          </Form.Item>
        }
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
              Add {type}
          </Button>
          {/* <Button htmlType='button' onClick={close}>
              Cancel
          </Button> */}
        </Form.Item>
      </Form>
    </Modal>
  )
}
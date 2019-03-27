import React, { Component } from 'react'
import { Form, Input, Button, Icon, Row, Col, message, notification  } from 'antd'

import styles from './index.less'
import { testPost } from '@services/api.js'

const { FormItem } = Form;

//使用message必须先调用config，否则会出现点击两次才出现的问题
message.config({
    top: 100,
    duration: 1,
    maxCount: 3,
});

notification.config({
    placement: 'topRight',
    top: 100,
    duration: 3,
  });

class index extends Component {

    //获取验证码
    handleGetCode = (e) => {
        this.props.form.validateFields(['phone'], (errors, values) => {
            if(!errors){
                message.loading('验证码发送中...');
                testPost({phone: values.phone}).then(res => {
                    message.destroy();
                    message.success('发送成功');
                    notification.info({
                        message: '验证码',
                        description: `你的验证码为：${res.data.data.code}, 请不要告知他人!`,
                    });
                })
            }
        });
    }

    //登录
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('提交的表单数据为： ', values);
                message.success('登录成功');
            }
        });
    }

    render() {
        const { getFieldDecorator  } = this.props.form;
        return (
        <div className={styles.wrapper}>
            <Form onSubmit={this.handleSubmit}>
                <Form.Item>
                    <Row gutter={8}>
                        {/* getFieldDecorator	用于和表单进行双向绑定 */}
                        {getFieldDecorator('phone', {
                            validateFirst: true,
                            // 校验规则
                            rules: [
                                { 
                                    required: true, 
                                    message: '请输入你的手机号码!' 
                                },{
                                    pattern: /^1[345789]\d{9}$/,
                                    message: '请输入有效的手机号码!'
                                }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号码" />
                        )}
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Row gutter={8}>
                        <Col span={12}>
                            {getFieldDecorator('code',
                                {
                                    validateFirst: true,
                                    rules: [
                                        { 
                                            required: true, message: '请输入你的验证码!' 
                                        }, 
                                        {
                                        type: 'number', 
                                        message: '请输入数字',
                                        transform:(value)=> {return Number(value)}
                                    }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="验证码" />
                            )}
                        </Col>
                        <Col span={12} style={{ textAlign: "right" }}>
                            <Button onClick={ this.handleGetCode }>获取验证码</Button>
                        </Col>
                    </Row>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        style={{ width: "100%" }}
                    >
                    登录
                    </Button>
                </Form.Item>
            </Form>  
        </div>
    )
  }
}

//使用Form.create 后自带 this.props.form 属性
export default Form.create({ name: 'login-form-demo' })(index)
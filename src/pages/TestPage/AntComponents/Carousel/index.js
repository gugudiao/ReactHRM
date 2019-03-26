import React, { Component } from 'react'
import { Carousel } from 'antd'
import styles from './index.less'
import { testGet } from '@/services/api.js'

export default class index extends Component {
  
  constructor(props, context){
    super(props, context);
    this.state = {
      banners: []
    }
  }

  componentWillMount(){
    this.getBanners();
  }

  //获取轮播图数据
  getBanners = () => {
    testGet().then(res => {
      const banners = res.data.data.banners;
      this.setState({
        banners
      })
    });
  }

  render() {
    const { banners } = this.state 
    return (
      <div className={styles['override-ant']}>
        <Carousel className={styles['carousel']} autoplay="true">
            {
              banners.map((item, index) => {
                return <div key={index} ><img src={item.pic}></img></div>
              })
            }
        </Carousel>
      </div>
    )
  }
}

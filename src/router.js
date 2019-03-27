/*
   Root, Router 配置
*/
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
 
 
import WorkerService from './pages/workerServicePage/workerService';
import SmartManage from './pages/smartManagePage/smartManage';
import WorkDo from './pages/workDoPage/workDo';
import TestLayout from '@layout/TestLayout'
 
const Root = () => (
   <div>
        <Switch>
            <Route path="/" exact component={WorkerService} />
            <Route path="/workerService" component={WorkerService} />
            <Route path="/smartManage" component={SmartManage}/>
            <Route path="/workDo" component={WorkDo}/>
            {/* 测试页面 */}
            <Route path="/test" component={TestLayout} />>
            {/*路由不正确时，默认跳回home页面*/}
            <Route render={() => <Redirect to="/" />} />
        </Switch>
   </div>
);
 
export default Root;


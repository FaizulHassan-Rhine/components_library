import React from "react";
import { Progress, Space } from 'antd';

const ProcessBar = () => {
    return (
        <div >
            <Space size={30}>
                <Progress type="circle" percent={30} strokeColor={"orange"} strokeWidth={5} size={50} />
                <Progress type="circle" percent={50} strokeColor={"red"} strokeWidth={2} size={100} />
                <Progress type="circle" percent={70} size={70} strokeColor={"yellow"} strokeWidth={5} />
            </Space>
        </div>
    );
};

export default ProcessBar;

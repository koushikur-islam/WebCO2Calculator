import MessageParser from "@/helpers/appHelper";
import { calculateCarbonAsync } from "@/services/CarbonCalculationService";
import { Button, Form, Input, Select } from "antd";
import Head from "next/head";
import { useEffect, useState } from "react";
const { Option } = Select;

import {
  SearchOutlined, LikeOutlined, DislikeOutlined
} from '@ant-design/icons';

export default function Home() {
  const [form] = Form.useForm();
  const [isCalculating, setIsCalculating] = useState(false)
  const [result, setResult] = useState<any>(null!)
  useEffect(() => { console.log(result) }, [result])
  const onFinish = async (values: any) => {


    if (!values?.url) {
      MessageParser.error('Invalid url!')
      return;
    }
    else {
      setIsCalculating(true)
      await calculateCarbonAsync(values).then((res: any) => {
        if (res?.status == 200) {
          setResult(res?.data)

        }
        setIsCalculating(false)
      })
        .catch((err: any) => {
          MessageParser.error('Something went wrong when calculating carbon data!')
          setIsCalculating(false)
        })
    }

  }

  return (
    <>
      <Head>
        <title>
          Carbon Calculator
        </title>
      </Head>
      <div className="limited-box text-center overflow-auto">
        <p className="font-semibold text-lg mt-12">Did you know the impact of your website on planet earth?</p>
        <p className="font-bold mt-3 mb-10" style={{ fontSize: 36 }}>
          Calculate your website's <b className="text-green-600">carbon</b> emission footprint.
        </p>
      </div>

      <div className="limited-box text-center">
        <Form
          form={form}
          name="analyzeForm"
          onFinish={onFinish}
          scrollToFirstError
          layout='vertical'
        >
          <Form.Item
            name="url"
            style={{ display: 'inline-block', width: 'calc(50% - 5px)', marginRight: 10 }}
          >
            <Input autoCapitalize='on' autoComplete='off' placeholder='Enter webpage url...' className="py-4 pl-5" />
          </Form.Item>


          <Form.Item
            name="browser"
            style={{ display: 'inline-block', width: 'calc(25%)' }}
          >
            <Select placeholder="Select browser" className="text-left">
              <Option value="Safari">Safari</Option>
              <Option value="Chrome">Chrome</Option>
              <Option value="Firefox">Firefox</Option>
            </Select>
          </Form.Item>

          <Form.Item className=' text-center'>
            <Button type="primary" htmlType="submit" loading={isCalculating} className=' text-white border-green-600 px-5 w-40 h-12' style={{ backgroundColor: 'var(--primary-color)', paddingTop: 10 }}>
              Calculate
            </Button>
          </Form.Item>
        </Form>
      </div>
      {
        !isCalculating && result &&
        <div className="limited-box">
          <div className="text-2xl font-semibold pl-9 mb-4 mt-7 ">
            Results
          </div>
          <div className="limited-box justify-center flex">

            {result?.errorCode == 500 ?
              <div className="bg-green-50 rounded-2xl text-center text-lg p-10 w-[75%] mt-10">
                Oops! Something went wrong. Please try again.
              </div>
              :
              <>

                <div className="flex mb-10">
                  <div className="flex-1 bg-green-50 mr-3 rounded-2xl p-7">
                    <div className="text-center text-xl">
                      <b className="text-3xl font-bold text-green-600">{(Math.round(result?.co2js_emission_val * 100) / 100).toFixed(2)}</b> gm
                    </div>
                    <p className="pt-5 text-center">
                      Each visit to this page contributes to 32 grams of Co2 emmissions.
                    </p>
                  </div>

                  <div className="flex-1 bg-green-50 mr-3 rounded-2xl p-7">
                    <div className="text-center text-xl">
                      <b className="text-3xl font-bold text-green-600">
                        {
                          result?.isGreenHost ?
                            <DislikeOutlined />
                            :
                            <LikeOutlined />
                        }
                      </b>
                    </div>
                    <p className="pt-5 text-center">
                      This webpage {result?.isGreenHost ? 'does not' : ''}  appears to be hosted on Green Hosting.
                    </p>
                  </div>
                </div>
              </>
            }
          </div >
        </div>
      }
    </>
  )
}
import React, { Component } from 'react';
import { Button, CheckBox, PopConfirm, Option,Table } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCopy } from '@fortawesome/free-solid-svg-icons';


export default class RcSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: false,
      data: [
        {
          id: 1,
          name: 'ThuanLV',
          age: 21
        },
        {
          id: 1,
          name: 'ThuanLV',
          age: 34
        },
        {
          id: 1,
          name: 'ThuanLV',
          age: 2561
        },
        {
          id: 1,
          name: 'ThuanLV',
          age: 333
        }
      ]
    }
  }
  columns = () => {
    return [
      {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',

      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Action',
        key: 'action',
        dataIndex: 'action',
        render: (record) => (
          <div className="d-flex">
            <span className="color--blue" onClick={() => this.updateCategory(record)}>Edit</span>
            <div className="mx-5">|</div>
            <PopConfirm
              content="Are you sure delete it ?"
              onOk={() => this.deleteCategory(record)}
            >
              <div className="color--red">Delete</div>
            </PopConfirm>
          </div>
        ),
      }]

  }
  onSelect = (row) => {
    // console.log('row Selected: ', row);
  }
  onSelectAll = (rows) => {
    // console.log('rows Selected: ', rows);
  }
  render() {
    const configsSelect = {
      all: true,
      onSelect: this.onSelect,
      onSelectAll: this.onSelectAll
    }
    return (
      <React.Fragment>
        <h1 className="rc__label-title">Table types</h1>
        <div className="rc__box">
          <div className="rc__box__content">
            <div className="p-10">
              <div className="rc__label mb-10">Basic usage:</div>
              <div className="d-flex mb-20">
                <Table
                  loading={false}
                  columns={this.columns()}
                  dataSource={this.state.data}
                />
              </div>
            </div>
            <div className="rc__box__guidline p-10">
              <span className="rc__box__guidline__icon">
                <FontAwesomeIcon
                  icon={faCode}
                  onClick={() => this.setState({ isShow: !this.state.isShow })}
                  className="mr-10"
                />
                <FontAwesomeIcon
                  icon={faCopy}
                />
              </span>
              {
                this.state.isShow && (
                  <pre className="rc__box__guidline__content">
                    <code data-lang="html">

                    </code>
                  </pre>
                )
              }
            </div>
          </div>
        </div>
        <div className="rc__box">
          <div className="rc__box__content">
            <div className="p-10">
              <div className="rc__label mb-10">Select:</div>
              <div className="d-flex mb-20">
                <Table
                  select={configsSelect}
                  loading={false}
                  columns={this.columns()}
                  dataSource={this.state.data}
                />
              </div>
            </div>
            <div className="rc__box__guidline p-10">
              <span className="rc__box__guidline__icon">
                <FontAwesomeIcon
                  icon={faCode}
                  onClick={() => this.setState({ isShow: !this.state.isShow })}
                  className="mr-10"
                />
                <FontAwesomeIcon
                  icon={faCopy}
                />
              </span>
              {
                this.state.isShow && (
                  <pre className="rc__box__guidline__content">
                    <code data-lang="html">

                    </code>
                  </pre>
                )
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
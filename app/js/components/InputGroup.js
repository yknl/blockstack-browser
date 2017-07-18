import React, { Component, PropTypes } from 'react'

class InputGroup extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.object,
    onChange: PropTypes.func,
    type: PropTypes.string,
    step: PropTypes.string,
    disabled: PropTypes.bool,
    inverse: PropTypes.bool,
    textarea: PropTypes.bool,
    textareaRows: PropTypes.number,
    required: PropTypes.bool
  }

  render() {
    let value = '',
        type = "text",
        step = "any",
        disabled = false,
        required = false
    if (this.props.data && this.props.name) {
      value = this.props.data[this.props.name]
    }
    if (this.props.type) {
      type = this.props.type
    }
    if (this.props.disabled) {
      disabled = this.props.disabled
    }
    if (this.props.required) {
      required = this.props.required
    }
    let inputClass = "form-control"
    if (this.props.inverse) {
      inputClass = "form-inverse-control"
    }
    let labelClass = "form-control-label"
    if (this.props.inverse) {
      labelClass = "form-control-label form-inverse-control-label"
    }

    return (
      <div className="form-group m-b-11">
        <fieldset>
          <div className="col-xs-9 pull-right">
            { this.props.textarea ?
              <textarea name={this.props.name}
              disabled={disabled}
              className={inputClass}
              type={type}
              placeholder={
                this.props.placeholder ? this.props.placeholder : this.props.label
              }
              value={value}
              onChange={this.props.onChange}
              rows={this.props.textareaRows || 2} />
            :
            <input name={this.props.name}
              disabled={disabled}
              className={inputClass}
              type={type}
              step={step}
              required={required}
              placeholder={
                this.props.placeholder ? this.props.placeholder : this.props.label
              }
              value={value}
              onChange={this.props.onChange} />
            }
          </div>
          <label className={`col-xs-3 ${labelClass}`}>
            {this.props.label}
          </label>
        </fieldset>
      </div>
    )
  }
}

export default InputGroup

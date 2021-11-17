import "./style.scss"

const Help = ({ posted, succeed, onChangeHandler, onHandleSubmit }) => (
  <div className="help flex flex-column">
    Contact us
    <div className="help-alert">
      {posted &&
        (succeed ? (
          <div className="help-alert-succeed flex">
            Successfully delivered. We will reach you soon
          </div>
        ) : (
          <div className="help-alert-failed flex">
            Oops, something really bad happend.
          </div>
        ))}
    </div>
    <div className="help-wrap flex flex-column">
      <div className="flex">
        <input
          type="text"
          className="help-firstname help-inputs"
          placeholder="First Name"
          name="firstname"
          onChange={onChangeHandler}
        />
        <input
          type="text"
          className="help-lastname help-inputs"
          placeholder="Last Name"
          name="lastname"
          onChange={onChangeHandler}
        />
      </div>
      <input
        type="text"
        className="help-email help-inputs"
        placeholder="your@email.com"
        name="email"
        onChange={onChangeHandler}
      />
      <textarea
        className="help-comments help-inputs"
        name="comments"
        id="help-comment"
        rows="4"
        placeholder="Comments"
        onChange={onChangeHandler}
      ></textarea>
      <button onClick={onHandleSubmit}>Submit</button>
    </div>
  </div>
)

export default Help

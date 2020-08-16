import Link from 'next/link';


const FieldTypes = [
  {
    id: 'image',
    type: 'image',
    defaultValue: "",
  },
  {
    id: 'name',
    type: 'text',
    defaultValue: "Cayce Pollard",
  },
  {
    id: 'profile',
    type: 'text',
    defaultValue: "Neural Interface Designer",
  }
]

const Field = ({ value, setValue, type, id, defaultValue, setEdit, editMode, edit }) => {
  
  if (editMode) {
    return edit === id && (
      <input value={value} onChange={(e) => setValue(id, e.target.value)} />
    )
  }


  return <div className={`field ${type} ${edit === id ? 'active' : ''}`} onClick={() => setEdit(id)} >
  {type === 'image' ? (
    <>
    {value ? 
      <img src={value} /> : 
      <div 
        className={`field placeholder`} />}
      </>
  ) : type === 'text'  ?(
      <h1>{value}</h1>
      ) : null}
      <style jsx>
      {`
      
      .field:hover {
                border: 1px solid lightblue;
              }
              .field.active {
                border: 2px solid navy;
                border-radius: 3px;
              }
              .field {
                padding: 10px 20px;
                margin-top: 20px;
                text-align: center;
              }
              
              .placeholder {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: #aaa;
              }
        `}
      </style>
  </div>
}

const Build = () => {
  const defaultState = {}
  FieldTypes.forEach(f => defaultState[f.id] = f.defaultValue )
  const [page, setPage] = React.useState({
    ...defaultState
  })
  const [edit, setEdit] = React.useState(null)
  // const [name, setName] = React.useState("")
  // const [profile, setProfile] = React.useState("")
  const setValue = (key, value) => {

    setPage({
      ...page,
      [key]: value
    })
  }

  console.log(page)
    return (
        <div className="container">            
          <div className={`sidebar ${!!edit && 'active'}`}>
            Sidebar
            <br />
            {FieldTypes.map(f => (
                <Field key={`v-${f.id}`} value={page[f.id]} setValue={setValue} editMode type={f.type} setEdit={setEdit} defaultValue={f.defaultValue} id={f.id} edit={edit} />
              ))}
          </div>
            <div className="header">
              {FieldTypes.map(f => (
                <Field key={`va-${f.id}`} value={page[f.id]}  type={f.type} setEdit={setEdit} defaultValue={f.defaultValue} id={f.id} edit={edit} />
              ))}
            </div>
            <style jsx>{`
              .sidebar {
                width: 200px;
                position: fixed;
                top: 0;
                left: 0;
                height: 100vh;
                overflow: auto;
                background: #222;
                color: #fff;
                display: none;
              }
              .sidebar.active {
                display: block;
              }
              .container {
                width: 80%;
                max-width: 720px;
                margin: 0 auto;
              }

              .header {
                display: flex;
                flex-direction: column;
                align-items: center;
              }


              
            `}</style>
        </div>
    )
}

export default Build;
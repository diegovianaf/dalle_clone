type FormFieldProps = {
  labelName: string
  type: string
  name: string
  placeholder: string
  value: string
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  isSurpriseMe?: boolean
  handleSurpriseMe?: () => void
}

const FormField = (props: FormFieldProps) => {
  const {
    labelName,
    type,
    name,
    placeholder,
    value,
    handleChange,
    isSurpriseMe,
    handleSurpriseMe,
  } = props

  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className='block text-sm font-medium text-gray-900'
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='font-semibold text-xs bg-indigo-100 py-1 px-2 rounded text-black'
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormField

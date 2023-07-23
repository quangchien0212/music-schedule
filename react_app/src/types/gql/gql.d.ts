interface CreateRecordVars<Attributes> {
  input: {
    attributes: Attributes
  }
}

interface ModifyRecordVars<Attributes> {
  input: {
    id: string
    attributes: Attributes
  }
}

interface MutationBaseData {
  success: boolean
  errors: [string]
}

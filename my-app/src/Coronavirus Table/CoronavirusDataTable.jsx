import { useEffect } from "react";

const readInData = async () => {
  Papa.parse()
}

export default function CoronavirusDataTable(props) {
  useEffect(() => {
    readInData()
  }, [])

  return (
    <div>
      <table>
        <thead>

        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  )
}
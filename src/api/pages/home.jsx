
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Api } from '../api/api'
import Card from '..componets/Card/Card'

export default function Home() {
  const [devmons, setDevmons] = useState([])

  async function fetchData() {
    const apiUrl = Api.personagem.readAll()

    const response = await Api.buildApiGetRequest(apiUrl)

    if (response.ok) {
      const data = await response.json()

      setDevmons(data)
    } else {
      toast.error('Erro ao carregar lista de DevMon')
    }
  }

  useEffect(function () {
    fetchData()
  }, [])
  return (
    <>
      <div className="cards">
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div>
    </>
  )
}
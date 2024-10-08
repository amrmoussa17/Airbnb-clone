import { MapContainer, Marker, TileLayer } from "react-leaflet"
import { Icon, LatLngExpression } from "leaflet"
import "leaflet/dist/leaflet.css"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

interface MapProps {
  center?: number[]
}

const Map = ({ center }: MapProps) => {
  const customIcon = new Icon({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
    iconSize: [28, 36],
  })
  return (
    <MapContainer
      className="h-[35vh] rounded-lg"
      center={(center as LatLngExpression) || [51.505, -0.09]}
      zoom={center ? 4 : 2}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={customIcon}
        position={(center as LatLngExpression) || [51.505, -0.09]}
      ></Marker>
    </MapContainer>
  )
}

export default Map

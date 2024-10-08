import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  RadarChart,
  Radar as RadarItem,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Speed",
    A: 99,
    B: 110,
    fullMark: 100,
  },
  {
    subject: "Power",
    A: 62,
    B: 130,
    fullMark: 100,
  },
  {
    subject: "Quickness",
    A: 86,
    B: 10,
    fullMark: 100,
  },
  {
    subject: "Durability",
    A: 54,
    B: 100,
    fullMark: 100,
  },
  {
    subject: "Reaction",
    A: 85,
    B: 90,
    fullMark: 100,
  },
  {
    subject: "Brain",
    A: 65,
    B: 85,
    fullMark: 100,
  },
];

// TODO: Make this a reusable component
function Radar() {
  return (
    <div data-testid="radar-chart">
      <ResponsiveContainer width="100%" height={500}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <RadarItem
            name="Mike"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Radar;

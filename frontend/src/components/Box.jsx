import Issue1 from '../../src/Boxicons/1.png';
import Issue2 from '../../src/Boxicons/2.png';
import Issue3 from '../../src/Boxicons/3.png';
import Issue4 from '../../src/Boxicons/4.png';
import Issue5 from '../../src/Boxicons/5.png';
import Issue6 from '../../src/Boxicons/6.png';
import Issue7 from '../../src/Boxicons/7.png';
import Issue8 from '../../src/Boxicons/8.png';
import Issue9 from '../../src/Boxicons/9.png';
import Issue10 from '../../src/Boxicons/10.png';
import Issue11 from '../../src/Boxicons/11.png';
import Issue12 from '../../src/Boxicons/12.png';
import Issue13 from '../../src/Boxicons/13.png';
import Issue14 from '../../src/Boxicons/14.png';
import Issue15 from '../../src/Boxicons/15.png';
import Issue16 from '../../src/Boxicons/16.png';

const icons = [
  Issue1, Issue2, Issue3, Issue4, Issue5, Issue6, Issue7, Issue8,
  Issue9, Issue10, Issue11, Issue12, Issue13, Issue14, Issue15, Issue16
];

const issues = [
  { label: 'Package delayed', color: '#DFF8EE', height: 'h-36', position: '' },
  { label: 'Tracking issue', color: '#FEEDE1', height: 'h-36', position: '-left-2' },
  { label: 'Marked delivered, not received', color: '#DDFBFE', height: 'h-36', position: '-left-5' },
  { label: 'Wrong address', color: '#FFE8F1', height: 'h-36', position: '-left-3' },
  { label: 'Parcel damaged', color: '#E9E6FE', height: 'h-36', position: '' },
  { label: 'Cancel shipment', color: '#FFF6D9', height: 'h-36', position: '' },
  { label: 'No confirmation email', color: '#DCF0FF', height: 'h-36', position: 'left-2' },
  { label: 'Reschedule delivery', color: '#FBE7DC', height: 'h-36', position: 'left-4' },
  { label: 'International shipping slow', color: '#F3F0FF', height: 'h-32', position: '' },
  { label: 'Charged twice', color: '#E6FFF1', height: 'h-32', position: '-left-2' },
  { label: 'Customs fee too high', color: '#FFDDEE', height: 'h-32', position: '-left-5' },
  { label: "Can't find tracking number", color: '#FFF2E6', height: 'h-32', position: '-left-4' },
  { label: 'Pickup missed', color: '#E5F7FF', height: 'h-32', position: '' },
  { label: 'Where is return label?', color: '#FCEEEE', height: 'h-32', position: '' },
  { label: 'Need proof of delivery', color: '#F0FFF4', height: 'h-32', position: 'left-2' },
  { label: 'Package returned', color: '#FFEEDC', height: 'h-32', position: 'left-4' },
].map((item, i) => ({ ...item, icon: icons[i] }));

const Box = ({ className = '', children }) => (
  <div className={`w-32 bg-[#FBFBFC] rounded-xl border px-2 py-4 border-gray-200 flex items-center justify-center mt-[4px] ${className}`}>
    {children}
  </div>
);

export default function BoxGrid() {
  return (
    <div className="flex flex-col items-center justify-center mt-3 space-y-5">
      {[0, 8].map((startIndex) => (
        <div className="flex gap-11 mr-10" key={startIndex}>
          {issues.slice(startIndex, startIndex + 8).map((issue, index) => (
            <Box key={index} className={`${issue.height} relative ${issue.position}`}>
              <div className="flex flex-col h-[100%] items-center">
                <div
                  className="w-24 h-11 rounded-3xl flex items-center justify-start"
                  style={{ backgroundColor: issue.color }}
                >
                  <img src={issue.icon} className="h-7 w-7 ml-[35%]" alt="" />
                </div>
                <p className="text-xs font-semibold text-center justify-end mt-6">{issue.label}</p>
              </div>
            </Box>
          ))}
        </div>
      ))}
    </div>
  );
}

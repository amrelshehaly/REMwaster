import { useCallback } from "react"
import Card from "../../atoms/Card"
import Button from "../../atoms/Button"
import Tooltip from "../../atoms/Tooltip"
import { IMAGE_URL } from "../../../constant"
import type { Skip } from "../../../types/skip"
import InfoIcon from '../../../assets/InfoIcon.png'
import './Skiplist.css'


type SkipListProps = {
    selectedSkip: Skip | null;
    setSelectedSkip: (skip: Skip) => void;
    setPreviewOpen: (skip: Skip) => void;
    skipList: Skip[];
}

export default function SkipList({ selectedSkip, setSelectedSkip, setPreviewOpen, skipList }: SkipListProps) {
    const handleSkipSelect = useCallback((skip: Skip) => {
        setSelectedSkip(skip);
    }, [setSelectedSkip]);

    const handlePreviewOpen = useCallback((skip: Skip) => {
        setPreviewOpen(skip);
    }, [setPreviewOpen]);
    return (
        <div className='container-skip-list'>
            {skipList.map((skip) => (
                <Card
                    title={`${skip.size} Yards Skip`}
                    image={IMAGE_URL}
                    onClick={() => handleSkipSelect(skip)}
                    selected={selectedSkip === skip}
                    key={skip.id}
                    chip={skip.size}
                >
                    <p>{skip.hire_period_days} Days Hire Period</p>
                    <div className='price-detaild'>
                        <div style={{ fontWeight: 'bold' }}>${skip.price_before_vat}</div>
                        <Tooltip content={
                            <div>
                                <p>Vat: {skip.vat}%</p>
                                <p>Transport: ${skip.transport_cost || 0}</p>
                            </div>
                        }>
                            <img src={InfoIcon} alt="Skip" className='info-icon' width={20} height={20} />
                        </Tooltip>
                    </div>

                    <Button onClick={() => handlePreviewOpen(skip)}>Click me</Button>
                </Card>
            ))}
        </div>
    )
}
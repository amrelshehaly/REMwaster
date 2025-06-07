import Preview from "../../atoms/Preview";
import type { Skip } from "../../../types/skip";

type SkipPreviewProps = {
    previewOpen: Skip | undefined;
    setPreviewOpen: (skip: Skip | undefined) => void;
}

export default function SkipPreview({ previewOpen, setPreviewOpen }: SkipPreviewProps) {
    return (
        <div>
            <Preview isOpen={previewOpen !== undefined} onClose={() => setPreviewOpen(undefined)}>
                <div>
                    <h3>Preview</h3>
                    <div>
                        <p>Skip Size: {previewOpen?.size} Yards</p>
                        <p>Hire Period: {previewOpen?.hire_period_days} Days</p>
                        <p>Price: ${previewOpen?.price_before_vat}</p>
                        <p>Vat: {previewOpen?.vat}%</p>
                        <p>Transport: ${previewOpen?.transport_cost || 0}</p>
                        <p>Collection: ${previewOpen?.allowed_on_road || 0}</p>
                    </div>
                </div>
            </Preview>
        </div>
    )
}
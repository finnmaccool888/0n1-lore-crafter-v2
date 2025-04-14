
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AiAssistant } from "@/components/ai-assistant"
import type { CharacterData } from "@/lib/types"

interface PsychologyProps {
  characterData: CharacterData
  updateCharacterData: (data: Partial<CharacterData>) => void
  nextStep: () => void
  prevStep: () => void
}

export function Psychology({
  characterData,
  updateCharacterData,
  nextStep,
  prevStep,
}: PsychologyProps) {
  const [activeField, setActiveField] = useState<string | null>(null)

  const handleUpdate = (field: keyof typeof characterData.psychology, value: any) => {
    updateCharacterData({
      psychology: {
        ...characterData.psychology,
        [field]: value,
      },
    })
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Character Psychology</h2>
      
      <Card className="p-4">
        <h3 className="text-xl mb-2">Personality Type</h3>
        <AiAssistant currentStep="psychology" subStep="personalityType" />
        <textarea
          className="w-full p-2 border rounded"
          value={characterData.psychology?.personalityType || ""}
          onChange={(e) => handleUpdate("personalityType", e.target.value)}
          placeholder="Describe personality type..."
        />
      </Card>

      <Card className="p-4">
        <h3 className="text-xl mb-2">Core Values & Beliefs</h3>
        <AiAssistant currentStep="psychology" subStep="coreValues" />
        <textarea
          className="w-full p-2 border rounded"
          value={characterData.psychology?.coreValues.join("\n") || ""}
          onChange={(e) => handleUpdate("coreValues", e.target.value.split("\n"))}
          placeholder="Enter core values..."
        />
      </Card>

      <div className="flex justify-between mt-8">
        <Button onClick={prevStep}>Previous</Button>
        <Button onClick={nextStep}>Next</Button>
      </div>
    </div>
  )
}

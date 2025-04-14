
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { AiAssistant } from "@/components/ai-assistant"
import { CharacterData } from "@/lib/types"

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
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Character Psychology</h2>
        <p className="text-muted-foreground">Define your character's psychological traits and core values</p>
      </div>

      <Card className="p-4">
        <h3 className="text-xl mb-2">Personality Type</h3>
        <AiAssistant currentStep="psychology" subStep="personalityType" characterData={characterData} />
        <Textarea
          className="w-full p-2 border rounded"
          value={characterData.psychology?.personalityType || ""}
          onChange={(e) => handleUpdate("personalityType", e.target.value)}
          onFocus={() => setActiveField("personalityType")}
          placeholder="Describe personality type..."
        />
      </Card>

      <Card className="p-4">
        <h3 className="text-xl mb-2">Core Values & Beliefs</h3>
        <AiAssistant currentStep="psychology" subStep="coreValues" characterData={characterData} />
        <Textarea
          className="w-full p-2 border rounded"
          value={characterData.psychology?.coreValues?.join("\n") || ""}
          onChange={(e) => handleUpdate("coreValues", e.target.value.split("\n"))}
          onFocus={() => setActiveField("coreValues")}
          placeholder="Enter core values..."
        />
      </Card>

      <Card className="p-4">
        <h3 className="text-xl mb-2">Mental State</h3>
        <AiAssistant currentStep="psychology" subStep="mentalState" characterData={characterData} />
        <Textarea
          className="w-full p-2 border rounded"
          value={characterData.psychology?.mentalState || ""}
          onChange={(e) => handleUpdate("mentalState", e.target.value)}
          onFocus={() => setActiveField("mentalState")}
          placeholder="Describe mental state..."
        />
      </Card>

      <div className="flex justify-between mt-8">
        <Button
          type="button"
          onClick={prevStep}
          variant="outline"
          className="border-purple-500/30 hover:bg-purple-900/20"
        >
          Previous
        </Button>
        <Button
          onClick={nextStep}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          Continue
        </Button>
      </div>
    </div>
  )
}

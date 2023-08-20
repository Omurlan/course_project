const interfaceConst = 'interface'

module.exports = (componentName) => {
  return `import cn from 'classnames'
import styles from './${componentName}.module.scss'
import { memo } from 'react'

${interfaceConst} ${componentName}Props {
  className?: string
}

export const ${componentName} = memo((props: ${componentName}Props) => {
  const { className } = props
    
  return (
      <div className={cn(styles.${componentName.toLowerCase()}, className)}>
              
      </div>
  )  
})`
}

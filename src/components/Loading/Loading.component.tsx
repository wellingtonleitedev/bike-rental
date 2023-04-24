import { Skeleton, SkeletonProps } from '@mui/material'

interface LoadingProps extends SkeletonProps {
  quantity?: number
}

const Loading = ({ quantity = 1, ...props }: LoadingProps) => (
  <>
    {Array.from(new Array(quantity)).map((_, index) => (
      <Skeleton key={index} data-testid='loading-skeleton' {...props} />
    ))}
  </>
)

export default Loading

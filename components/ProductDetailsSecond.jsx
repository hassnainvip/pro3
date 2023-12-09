import BlockContent from "@sanity/block-content-to-react";
import styles from '../styles/slug.module.css';
import Image from 'next/image'
import {urlFor } from "../lib/client";
import React from 'react';
import ReactPlayer from 'react-player'

const MoreInfo = () => (
    <span className={styles.moreInfo}>
      <button
      >
        MORE INFORMATION
      </button>
    </span>
  );



const ProductDetailsSecond = ({details, shouldRender }) => {
    const sanityId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;



  return (
    <>
         {shouldRender && details && (
          <BlockContent
            blocks={details}
            projectId={sanityId}
            dataset="production"
            priority={true}

            serializers={{

              marks: {
                strong: (props) => (
                  <strong className="font-bold">{props.children}</strong>
                ),
              },


              types: {

                youtube: ({node}) => {
                  const { url } = node
                  return (
                  <div className="min-w-full min-h-full my-4"><ReactPlayer url={url} autoplay={true}  width='auto'
                   />
                  </div>)
                },
                custom_script_video: ({node}) => {
                  const { custom_script_video } = node
                  return (
                  <div className="wistia-container" dangerouslySetInnerHTML={{__html: custom_script_video }} >
                  </div>)
                },


               image: ({ node }) => {
              const { asset } = node;

      // Construct the image URL
                const imageUrl =urlFor(asset).url()

                return (
                  <>
                    <Image
                      src={imageUrl}
                      alt={'product image'}
                      quality={100}
                      width={800} // Adjust these values as needed
                      height={1080}

                    />

                  </>
                     );
                       },


                block: (props) => {
                  switch (props.node.style) {

                    case "h1":
                      return (
                        <>
                        <MoreInfo />

                          <h1 className="font-bold mx-2 text-[12px]  py-2 hidden">
                            {props.children}
                          </h1>
                        </>
                      );
                    case "h2":
                      return (
                        <>
                          <h2 className="font-bold mx-2 text-[12px]  py-2">
                            {props.children}
                          </h2>
                        </>
                      );
                    case "h3":
                      return (
                        <h3 className="text-2xl font-semibold my-3 ">
                          {props.children}
                        </h3>
                      );
                    case "h4":
                      return (
                        <h4  style={{fontWeight: '400'}}  className="text-xl mx-2 ">
                          {props.children}
                        </h4>
                      );
                    case "h5":
                      return (
                        <h5 className="text-lg font-semibold my-3">
                          {props.children}
                        </h5>
                      );
                    case "h6":
                      return (
                        <h6 style={{fontWeight: '600'}} className="text-base my-3">
                          {props.children}
                        </h6>
                      );


                    default:
                      return (
                        <>
                          <p className="mx-2 sm:mx-0 text-[12px] text-[#212529] font-extralight ">
                            {props.children}
                          </p>
                        </>
                      );
                  }
                },
              },
            }}
          />
          )}

    </>
  )
}

export default React.memo(ProductDetailsSecond);